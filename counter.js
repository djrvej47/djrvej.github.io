function addRow() {
  const div = document.createElement('div');

  div.className = 'row';

  div.innerHTML = `
  <div class="container">
   <div class="counter">
	<a class="cr" href="index.html">[ 1 ]</a>
	<a class="cr" href="page2.html">[ 2 ]</a>
	<a class="cr" href="page3.html">[ 3 ]</a>
	<a class="cr" href="page4.html">[ 4 ]</a>
	<a class="cr" href="page5.html">[ 5 ]</a>
	<a class="cr" href="page6.html">[ 6 ]</a>
	<a class="cr" href="page7.html">[ 7 ]</a>
	<a class="cr" href="page8.html">[ 8 ]</a>
	<a class="cr" href="page9.html">[ 9 ]</a>
	<a class="cr" href="page10.html">[ 10 ]</a>
	<a class="cr" href="page11.html">[ 11 ]</a>
	<a class="cr" href="page12.html">[ 12 ]</a>
	<a class="cr" href="page13.html">[ 13 ]</a>
	<a class="cr" href="page14.html">[ 14 ]</a>
	<a class="cr" href="page15.html">[ 15 ]</a>
	<a class="cr" href="page16.html">[ 16 ]</a>
	<a class="cr" href="page17.html">[ 17 ]</a>
	<a class="cr" href="page18.html">[ 18 ]</a>
	<a class="cr" href="page19.html">[ 19 ]</a>
	<a class="cr" href="page20.html">[ 20 ]</a>
	<a class="cr" href="page21.html">[ 21 ]</a>
	<a class="cr" href="page22.html">[ 22 ]</a>
	<a class="cr" href="page23.html">[ 23 ]</a>
</div>
</div>
  `;

  document.getElementById('pagecounter').appendChild(div);
}
