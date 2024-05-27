function fizzbuzz(i) {
    if(i % 5 === 0 && i % 3 === 0){
      return `${i} - fizzbuzz`
    }
    else if(i % 5 === 0){
      return `${i} - buzz`
    }
    else if(i % 3 === 0){
      return `${i} - fizz`
    }
    else{
      return `${i}`
    }
  }

  for(let num=1;num<=100;num++){
    console.log(fizzbuzz(num))
  }

module.exports = {fizzbuzz}