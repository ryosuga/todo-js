import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //li生成
  const li = document.createElement("li");

  //spanタグ生成
  const span = document.createElement("span");
  span.innerText = inputText;
  span.classList.add("list-row");

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild("deleteTarget");
    //console.log(deleteTarget);
  });
  //console.log(deleteButton);

  // liタグの子要素に各要素を設定
  li.appendChild(span);
  span.appendChild(completeButton);
  span.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
  //console.log(span);
  //alert(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
