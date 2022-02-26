import React, {useState} from "react";
import s from "./Paginator.module.css";
import cn from "classnames";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

  console.log('Количество пользователей');
  console.log(totalItemsCount);
  console.log('Текущая страница в компоненте Пагитнатор');
  console.log(currentPage);
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  console.log('Количество страниц');
  console.log(pagesCount);

	let pages = [];
	//Отображаем только 20 страниц из 3000, потому что не знаю, ка сделать компонент пагинации
	for (let i = 1; i <= pagesCount; i++) {
		//for (let i = 1; i <= 20; i++) {
		pages.push(i);
  }
  
  let portionCount = Math.ceil(pagesCount / portionSize); //считаем количество порций - количество страницы с элементами на количество порций
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return <div className={s.paginator}>
    {portionNumber > 1 &&
      <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }
    {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
      .map((p) => {
        return <span className={ cn({
            [s.selectedPage]: currentPage === p
          }, s.pageNumber)}
            key={p}
            onClick={(e) => {
              onPageChanged(p);
            }}>{p}</span>
                  })}
      {portionCount > portionNumber &&
        <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
      </div>
};

export default Paginator;
