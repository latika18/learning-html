/** Writing your own version of js**/
/*** Writing your own version of gquery**/
class gquery (
  constructor(el){
    this.elemet = document.getElementsByClassName(el);
  }
)

function gquery(el){
    var element = new gquery(el);
    return element;
}
