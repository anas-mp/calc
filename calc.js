function buttonclick(val)
{
 document.getElementById("screen").value=document.getElementById("screen").value+val;
}
function buttonequal()
{
  var text=document.getElementById("screen").value
  var result=eval(text)
  document.getElementById("screen").value=result

}
function buttonclear()
{
    document.getElementById("screen").value=""
}