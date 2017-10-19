function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("imgId", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("imgId");
    ev.target.appendChild(document.getElementById(data));
}

function dropSame(ev) {

    ev.preventDefault();
    ev.stopPropagation();
    var data = ev.dataTransfer.getData("imgId");
    
    var src= document.getElementById(data);
    var srcTarget = src.parentElement;
    var tgt = ev.currentTarget.firstElementChild;

    ev.currentTarget.replaceChild(src, tgt);
    srcTarget.appendChild(tgt);
}