const CONFIG = {
  SIZE: 10,
  BOARD_SIZE: 10,
};

export function Snake() {
  function createBoard(elements: number) {
    return Array.from({ length: elements }, (i, j) => console.log('j', j));
  }

  console.log('createBoard', createBoard(10));

  return <div>Snake</div>;
}
