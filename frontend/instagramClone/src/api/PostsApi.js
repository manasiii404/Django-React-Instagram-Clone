import {addToPosts} from '../redux/slices/HomePosts';
import {changeLikeCount} from '../redux/slices/HomePosts';
import { API_BASE_URL } from '../constants/config';

export const getHomePosts = async (dispatch, getState, accessToken) => {
  let fetchedPosts = await fetch(
    `${API_BASE_URL}/api/post/following-posts?page=${getState}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  fetchedPosts = await fetchedPosts.json();
  dispatch(addToPosts(fetchedPosts));
};

export const likePost = async (dispatch, unique_id, accessToken) => {
  dispatch(changeLikeCount(unique_id));
  let response = await fetch(
    `${API_BASE_URL}/api/like/post/create/${unique_id}`,
    {method: 'POST', headers: {Authorization: `Bearer ${accessToken}`}},
  );
};

export const fetchComments = async (unique_id, accessToken, page, callback) => {
  let data = await fetch(
    `${API_BASE_URL}/api/comment/list/${unique_id}?page=${page}`,
    {headers: {Authorization: `Bearer ${accessToken}`}},
  );
  if (data.ok) {
    data = await data.json();
    callback(data);
  }
};

export const likeComment = async (unique_id, accessToken, callback) => {
  let response = await fetch(
    `${API_BASE_URL}/api/like/comment/create/${unique_id}`,
    {method: 'POST', headers: {Authorization: `Bearer ${accessToken}`}},
  );
};

export const postComment = async data => {
  let response = await fetch(
    `${API_BASE_URL}/api/comment/create/${data.unique_id}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data.accessToken}`,
      },
      body: JSON.stringify({
        text : data.text,
        parent_unique_id : data.parent_unique_id
      }),
    },
  );
};
