import React, { useEffect, useState } from 'react';
import { RootState, useAppDispatch } from '../../../store';
import { fetchTodosAsync } from '../../../store/thunks/todoThunks';
import Posts from '../../components/todos';
import {useSelector} from 'react-redux';
import Pagination from '../../components/pagination';
import { nextPage, previousPage, setTotalItems } from '../../../store/slices/paginationSlicer';

export interface tableProps {}

// const TablePage = () => {
const TablePage: React.FunctionComponent<tableProps> = () => {
  const dispatch = useAppDispatch();
  const todos = useSelector((store: RootState) => store.todoRef.todos);
  const {current,numOfPage,total,pageSize} = useSelector((store: RootState) => store.paginationRef);
  
  const handlePagenation = (side: string) => {
    if(side === 'next'){
      
      dispatch(nextPage());
    }
    else if(side === 'previous'){
      dispatch(previousPage());
    }
  }

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, []);

  useEffect(() => {
    dispatch(setTotalItems(todos.length));
  }, [todos]);

  const indexOfLastPost = current * pageSize;
  const indexOfFirstPost = indexOfLastPost - pageSize;
  const currentPosts = todos.slice(indexOfFirstPost, indexOfLastPost);


  return (
    <div className="container mt-5">
      <Posts todos={currentPosts} />
      <Pagination
        postsPerPage={numOfPage}
        totalPosts={total}
        paginate={handlePagenation}
        currentPage={current}
      />
    </div>
  );
};
export default TablePage;