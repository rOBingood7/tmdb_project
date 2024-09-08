export function LikeDislike(item) {
  const like_count = document.querySelector(".like_count");
  const dislike_count = document.querySelector(".dislike_count");
  const like_btn = document.querySelector(".like_btn");
  const dislike_btn = document.querySelector(".dislike_btn");

  let hasLiked = false;
  let hasDisliked = false;

  let likes = ((item.vote_average / 10) * item.vote_count).toFixed();
  let dislikes = (item.vote_count - likes).toFixed();
  like_count.innerHTML = likes;
  dislike_count.innerHTML = dislikes;

  like_btn.onclick = () => {
    if (hasLiked) {
      likes = (Number(likes) - 1).toFixed();
      hasLiked = false;
    } else {
      likes = (Number(likes) + 1).toFixed();
      hasLiked = true;
    }
    like_count.innerHTML = likes;
  };
  dislike_btn.onclick = () => {
    if (hasDisliked) {
      dislikes = (Number(dislikes) - 1).toFixed();
      hasDisliked = false;
    } else {
      dislikes = (Number(dislikes) + 1).toFixed();
      hasDisliked = true;
    }
    dislike_count.innerHTML = dislikes;
  };
}
