const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

tabItems.forEach(item => {
  item.addEventListener("click", selectItem);
});

function selectItem() {
  removeBorder();
  removeShow();
  this.classList.add("tab-border");

  const tabContentItem = document.getElementById(`${this.id}-content`);
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach(item => {
    item.classList.remove("tab-border");
  });
}

function removeShow() {
  tabContentItems.forEach(item => {
    item.classList.remove("show");
  });
}
