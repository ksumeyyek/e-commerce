const commentReviewsFunc = function () {
  const commentStarsDOM = document.querySelectorAll(
    ".comment-form-rating .star"
  );
  commentStarsDOM.forEach((star) => {
    star.addEventListener("click", (e) => {
      e.preventDefault();

      commentStarsDOM.forEach((item) => {
        item.classList.remove("active");
      });
      star.classList.add("active");
    });
  });
};

const addNewComment = function () {
  let comments = [];
  let commentTextDOM = document.getElementById("comment-text");
  let commentNameDOM = document.getElementById("comment-name");
  let commentButtonDOM = document.querySelector(".form-submit input");
  let commentListDOM = document.querySelector(".comment-list");
  let commentText = "";
  let commentName = "";

  commentTextDOM.addEventListener("input", function (e) {
    commentText = e.target.value;
  });
  commentNameDOM.addEventListener("input", function (e) {
    commentName = e.target.value;
  });
  function addComment(e) {
    e.preventDefault();
    comments.push({ text: commentText, author: commentName });
    let result = "";
    comments.forEach((item) => {
      result += `    
        <li class="comment-item">
            <div class="comment-avatar">
            <img src="img/avatars/avatar1.jpg" alt="" />
            </div>
            <div class="comment-text">
            <ul class="comment-star">
                <li>
                <i class="bi bi-star-fill"></i>
                </li>
                <li>
                <i class="bi bi-star-fill"></i>
                </li>
                <li>
                <i class="bi bi-star-fill"></i>
                </li>
                <li>
                <i class="bi bi-star-fill"></i>
                </li>
                <li>
                <i class="bi bi-star-fill"></i>
                </li>
            </ul>
            <div class="comment-meta">
                <strong>${item.author}</strong>
                <span>-</span>
                <time>April 23, 2022</time>
            </div>
            <div class="comment-description">
                <p>
                ${item.text}
                </p>
            </div>
            </div>
        </li>
`;
    });
    commentListDOM.innerHTML = result;
    commentNameDOM.value = "";
    commentTextDOM.value = "";
  }
  commentButtonDOM.addEventListener("click", addComment);
};
function commentsFunc() {
  commentReviewsFunc();
  addNewComment();
}
export default commentsFunc();
