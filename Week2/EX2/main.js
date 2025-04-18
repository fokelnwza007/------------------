function setAlert (){
    let intervalId = 0;
    intervalId = setInterval(function(){
        const isBreak =confirm("พี่น้องครับพักสายตาสักหน่อยมั้ย?");
        if (isBreak){
            clearInterval(intervalId);
            alert("ขอบคุฯที่พักสายตา")
        }
        

    },120 * 1000);
        
  
}