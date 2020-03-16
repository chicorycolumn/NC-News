import React from "react";
import axios from "axios";

const fetchArticles = cb => {
  //   axios
  //     .get(666)
  //     .then(res => res.data)
  //     .then(allArticlesData => {
  //       cb(allArticlesData);
  //     });
  cb([
    {
      title: "Rise of Skywalker was awesome!",
      topic: "films",
      author: "sally1",
      body:
        "While it was off to a rushed start, the film exceeded my expectations, rousing us with a blah...",
      created_at: 1006778113389
    },
    {
      title: "Why my cat bumps me?",
      topic: "pets",
      author: "sally2",
      body:
        "What I don't understand about my cat's behaviour, is that he so often bumps me with his head, and I really blah...",
      created_at: 1126778163389
    },
    {
      title: "Result: Sanders in Iowa",
      topic: "politics",
      author: "sally3",
      body:
        "Whether you love him or hate him, you certainly can't deny that Bernie Sanders has a real groundswell of support blah...",
      created_at: 1103778963389
    }
  ]);
};

export default fetchArticles;
