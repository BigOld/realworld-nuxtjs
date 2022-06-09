import { request } from "@/plugins/request";

export const getArticles = params => {
  return request({
    url: "/api/articles",
    params
  })
}


export const getFeedArticles = params => {
  return request({
    url: '/api/articels/feed',
    params,
  })
}

export const addFavorite = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  })
}

export const deleteFavorite = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  })
}

