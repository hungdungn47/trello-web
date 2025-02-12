import { Box, CircularProgress, Container, Typography } from '@mui/material'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { useEffect, useState } from 'react'
import { createNewColumnAPI, createNewCardAPI, updateBoardDetailsAPI, updateColumnDetailsAPI, moveCardBetweenColumnsAPI, deleteColumnDetailsAPI } from '../../apis'
import { generatePlaceholderCard } from '~/utils/formatters'
import { fetchBoardDetailsAPI, updateCurrentActiveBoard, selectCurrentActiveBoard } from '~/redux/activeBoard/activeBoardSlice'
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty } from 'lodash'
import { sortArray } from '~/utils/sorts'
import { toast } from 'react-toastify'

const Board = () => {
  const dispatch = useDispatch();
  // const [board, setBoard] = useState(null)

  const board = useSelector(selectCurrentActiveBoard);
  useEffect(() => {
    const boardId = '670901d62903edebcb188b99'

    dispatch(fetchBoardDetailsAPI(boardId))

    // fetchBoardDetailsAPI(boardId).then((board) => {

    //   board.columns = sortArray(board?.columns, board?.columnOrderIds, '_id')

    //   board.columns.forEach(column => {
    //     if (isEmpty(column.cards)) {
    //       column.cards = [generatePlaceholderCard(column)]
    //       column.cardOrderIds = [generatePlaceholderCard(column)._id]
    //     } else {
    //       column.cards = sortArray(column?.cards, column?.cardOrderIds, '_id')
    //     }
    //   })
    //   setBoard(board)
    // })
  }, [dispatch])

  const createNewColumn = async (newColumnData) => {
    const createdColumn = await createNewColumnAPI({
      ...newColumnData,
      boardId: board._id
    })
    createdColumn.cards = [generatePlaceholderCard(createdColumn)]
    createdColumn.cardOrderIds = [generatePlaceholderCard(createdColumn)._id]
    const newBoard = { ...board }
    newBoard.columns.push(createdColumn)
    newBoard.columnOrderIds.push(createdColumn._id)

    // dispatch(updateCurrentActiveBoard(newBoard))
    dispatch(updateCurrentActiveBoard(newBoard))
  }

  const createNewCard = async (newCardData) => {
    const createdCard = await createNewCardAPI({
      ...newCardData,
      boardId: board._id
    })
    const newBoard = { ...board }
    const columnToUpdate = newBoard.columns.find(column => column._id === createdCard.columnId)
    if (columnToUpdate) {
      if (columnToUpdate.cards.some(card => card.FE_PlaceholderCard)) {
        columnToUpdate.cards = [createdCard]
        columnToUpdate.cardOrderIds = [createdCard._id]
      } else {
        columnToUpdate.cards.push(createdCard)
        columnToUpdate.cardOrderIds.push(createdCard._id)
      }
    }
    dispatch(updateCurrentActiveBoard(newBoard))
  }

  const moveColumns = (dndOrderedColumns) => {
    const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
    const newBoard = {
      ...board
    }
    newBoard.columns = dndOrderedColumns
    newBoard.columnOrderIds = dndOrderedColumnsIds
    dispatch(updateCurrentActiveBoard(newBoard))

    updateBoardDetailsAPI(newBoard._id, { columnOrderIds: dndOrderedColumnsIds })
  }

  const moveCardsInSameColumn = (dndOrderedCards, dndOrderedCardIds, columnId) => {
    const newBoard = { ...board }
    const columnToUpdate = newBoard.columns.find(column => column._id === columnId)
    if (columnToUpdate) {
      columnToUpdate.cards = dndOrderedCards
      columnToUpdate.cardOrderIds = dndOrderedCardIds
    }
    dispatch(updateCurrentActiveBoard(newBoard))

    updateColumnDetailsAPI(columnId, { cardOrderIds: dndOrderedCardIds })
  }

  const moveCardToDifferentColumn = (currentCardId, oldColumnId, newColumnId, dndOrderedColumns) => {

    const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
    const newBoard = { ...board }
    newBoard.columns = dndOrderedColumns
    newBoard.columnOrderIds = dndOrderedColumnsIds
    dispatch(updateCurrentActiveBoard(newBoard))

    let oldCardOrderIds = dndOrderedColumns.find(column => column._id === oldColumnId)?.cardOrderIds
    if (oldCardOrderIds[0].includes('placeholder-card')) {
      oldCardOrderIds = []
    }
    moveCardBetweenColumnsAPI({
      currentCardId,
      oldColumnId,
      oldCardOrderIds: oldCardOrderIds,
      newColumnId,
      newCardOrderIds: dndOrderedColumns.find(column => column._id === newColumnId)?.cardOrderIds
    })
  }

  const deleteColumnDetails = (columnId) => {
    const newBoard = {
      ...board
    }
    newBoard.columns = newBoard.columns.filter(c => c._id !== columnId)
    newBoard.columnOrderIds = newBoard.columnOrderIds.filter(id => id !== columnId)
    dispatch(updateCurrentActiveBoard(newBoard))
    deleteColumnDetailsAPI(columnId).then(res => {
      toast.success(res?.deleteResult)
    })
  }

  if (!board) {
    return (
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        gap: 2
      }}>
        <CircularProgress />
        <Typography>Loading board...</Typography>
      </Box>
    )
  }

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar/>
      <BoardBar board={board}/>
      <BoardContent
        board={board}
        createNewColumn={createNewColumn}
        createNewCard={createNewCard}
        moveColumns={moveColumns}
        moveCardsInSameColumn={moveCardsInSameColumn}
        moveCardToDifferentColumn={moveCardToDifferentColumn}
        deleteColumnDetails={deleteColumnDetails}/>
    </Container>
  )
}

export default Board