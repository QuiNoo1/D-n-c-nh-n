const btnTomTat = document.getElementById('btntomtat');
const btnMucTieu = document.getElementById('btnmuctieu');
const btnsothich = document.getElementById('btnsothich');
const contentTomTat = document.getElementById('tomtat');
const contentMucTieu = document.getElementById('muctieu');
const contentsothich = document.getElementById('sothich')

btnTomTat.onclick = function () {
  contentTomTat.classList.toggle('show');
  btnTomTat.value = contentTomTat.classList.contains('show') 
    ? "Ẩn tóm tắt bản thân" 
    : "Tóm tắt bản thân";
};

btnMucTieu.onclick = function () {
  contentMucTieu.classList.toggle('show');
  btnMucTieu.value = contentMucTieu.classList.contains('show') 
    ? "Ẩn mục tiêu nghề nghiệp" 
    : "Mục Tiêu Nghề Nghiệp";
};
btnsothich.onclick = function() {
    contentsothich.classList.toggle('show');
    btnsothich.value= contentsothich.classList.contains('show')
    ?"Ẩn Sở Thích Cá Nhân"
    :"Sở thích Cá Nhân";
}
