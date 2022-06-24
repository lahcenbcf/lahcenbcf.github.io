const hr=document.getElementById('hr');
const mn=document.getElementById('mn')
const sc=document.getElementById('sc');
var d=new Date();
const horloge=document.querySelector('.horloge');
horloge.style.color='white'
setInterval(function(){
    var d=new Date();
horloge.innerHTML=d.toLocaleTimeString()}
,1000)


setInterval(() => {
    var d=new Date();
let hour=d.getHours() *30;
let minute=d.getMinutes()*6;
let seconde=d.getSeconds()*6;

    hr.style.transform=`rotateZ(${hour+(minute/12)}deg)`
mn.style.transform=`rotateZ(${minute}deg)`
sc.style.transform=`rotateZ(${seconde}deg)`


});
