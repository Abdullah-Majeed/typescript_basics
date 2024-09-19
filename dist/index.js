"use strict";
let fullName = "abdullah";
let cost = 0;
let isWork = false;
const newAuthor = { name: 'Abdulah' };
const newPost = {
    title: 'hello', created: new Date(), author: newAuthor
};
let fruits = { name: 'peach', cost: 100 };
const createPost = (post) => {
    console.log(`Created by ${post.author.name} at ${post.created}`);
};
function createPostOld(post) {
    console.log(`Author: ${post.author.name} Created at ${post.created}`);
}
createPostOld(newPost);
//array
const names = ['peach', 'mango'];
// tuple
const hsla = [100, '100', '100', 100];
const posts = [newPost, { title: 'new post', created: new Date(), author: { name: 'zain' } }];
console.log(posts);
const getRandomColorCode = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
};
console.log(getRandomColorCode());
const oneUser = { name: 'Abdullah', score: 70 };
const newUser = (user) => {
    console.log(`New user ${user.name} and score ${user.score}`);
};
newUser(oneUser);
let score;
score = 20;
score = "hello world";
console.log(`Score: ${score}`);
let email = null;
console.log(`Email: ${email}`);
email = "test@gmail.com";
console.log(`Email: ${email}`);
const swapIt = (id) => {
    if (typeof id === 'string') {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
};
const logDetails = (value) => {
    if (value.type === 'user') {
        console.log(value.firstName, value.lastName);
    }
    if (value.type === 'person') {
        console.log(value.name, value.age);
    }
};
logDetails({ name: "abdullah", age: 70, Id: 1, type: 'person' });
