export  function fetchCount(amount = 1) {
  return new Promise(async (resolve) =>{
 const response = await fetch('http://')
 const data = response.json();
 resolve({data});
}
  );
}
