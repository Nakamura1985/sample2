'use strict';

{
  const open = document.querySelector('#open');
  const overlay = document.querySelector('.overlay');
  const close = document.querySelector('#close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });
  
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  const select_year = document.querySelector('#year');
  const select_month = document.querySelector('#month');
  const select_day = document.querySelector('#day');
  let i;

  function $set_year(){
    // 年を生成(100年分)
    for(i = 2004; i > 1903; i--){
      let op = document.createElement('option');
      op.value = i;
      op.text = i;
      select_year.appendChild(op);
    }
  }

  function $set_month(){
    // 月を生成(12)
    for(i = 1; i <= 12; i++){
      let op = document.createElement('option');
      op.value = i;
      op.text = i;
      select_month.appendChild(op);
    }
  }

  function $set_day(){
    //日の選択肢を空にする
    let children = select_day.children
    while(children.length){
      children[0].remove()
    }
    // 日を生成(動的に変える)
    if(select_year.value !== '' &&  select_month.value !== ''){
      const last_day = new Date(select_year.value,select_month.value,0).getDate()

      for (i = 1; i <= last_day; i++) {
        let op = document.createElement('option');
        op.value = i;
        op.text = i;
        select_day.appendChild(op);
      }
    }
  }

  // load時、年月変更時に実行する
  window.onload = function(){
    $set_year();
    $set_month();
    $set_day();
    select_year.addEventListener('change',$set_day)
    select_month.addEventListener('change',$set_day)
  }
}
