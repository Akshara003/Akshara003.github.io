@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Montserrat', sans-serif;
}
body
{
  width:100%;
  height: 100vh;
  color: #fff;  
}
.container
{
    background-color: #28c17e;
    text-align:center;
}
.container h1{
    font-weight: 600;
    padding: 1rem;
}
.editor
{
    background:#252744 ;
    text-align: start;
    display: flex;
    padding:lrem;

}
.left, 
.right{
    flex-basis:50%;
    padding:10px;


}
label{
    display:flex;
    align-items:center;
    font-size:18px;
}
label i{
    padding-right:5px;
}
textarea
{
    width: 100%;
    height: 300px;
    background: #1f1f1f;
    color:#fff;
    border:0;
    outline: 0;
    font-size: 18px;
    padding:10px 20px;

}
iframe
{
    width: 100%;
    height:95%;
    background: #fff;
    border:0;
    outline: 0;

}
