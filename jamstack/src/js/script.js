document.addEventListener('DOMContentLoaded', () => {

	const boxes = document.querySelectorAll('.view');

	const options = {
		root: null,
		rootMargin: "-40% 0px",
		threshold: 0
	}

	const observer = new IntersectionObserver(doWhenIntersect, options);

	boxes.forEach(box => {
		observer.observe(box)
	})

	function doWhenIntersect(entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				activateIndex(entry.target)
			}
		})
	}

	function activateIndex(element) {

  // すでにアクティブになっている目次を選択
  const currentActiveIndex = document.querySelector("#viewList .active");

  // すでにアクティブになっているものが0個の時（=null）以外は、activeクラスを除去
  if (currentActiveIndex !== null) {
    currentActiveIndex.classList.remove("active");
  }
  // 引数で渡されたDOMが飛び先のaタグを選択し、activeクラスを付与
  //const newActiveIndex = document.querySelector(`a[href='#${element.id}']`);
  const newActiveIndex = document.querySelector(`li[data-li='${element.id}']`);
  newActiveIndex.classList.add("active");
}

})