let fullName: string = "abdullah";
let cost: number = 0;
let isWork: boolean = false;

interface Post {
    title: string,
    created: Date,
    author: Author
}
interface Author {
    name: string,
}
const newAuthor: Author = { name: 'Abdulah' }
const newPost: Post = {
    title: 'hello', created: new Date(), author: newAuthor
}

let fruits: { name: string, cost: number } = { name: 'peach', cost: 100 };

const createPost = (post: Post): void => {
    console.log(`Created by ${post.author.name} at ${post.created}`)
}
function createPostOld(post: Post): void {
    console.log(`Author: ${post.author.name} Created at ${post.created}`)
}
createPostOld(newPost);
//array
const names: string[] = ['peach', 'mango'];
// tuple
const hsla: [number, string, string, number] = [100, '100', '100', 100];

const posts: Post[] = [newPost, { title: 'new post', created: new Date(), author: { name: 'zain' } }];
console.log(posts);

// type aliases
type RGB = [number, number, number];

const getRandomColorCode = (): RGB => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return [r, g, b];
}
console.log(getRandomColorCode());

type User = { name: string, score: number }

const oneUser: User = { name: 'Abdullah', score: 70 };

const newUser = (user: User): void => {
    console.log(`New user ${user.name} and score ${user.score}`);
}
newUser(oneUser);

let score: number | string

score = 20
score = "hello world"
console.log(`Score: ${score}`);

let email: string | null = null;
console.log(`Email: ${email}`);
email = "test@gmail.com"
console.log(`Email: ${email}`);

type newId = string | number;
const swapIt = (id: newId): newId => {
    if (typeof id === 'string') {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}

interface NewUser {
    type: 'user'
    firstName: string
    lastName: string
    Id: newId
}

interface NewPerson {
    type: 'person'
    name: string
    Id: newId
    age: number
}

const logDetails = (value: NewUser | NewPerson): void => {
    if (value.type === 'user') {
        console.log(value.firstName, value.lastName);
    }
    if (value.type === 'person') {
        console.log(value.name, value.age);
    }
}
logDetails({ name: "abdullah", age: 70, Id: 1, type: 'person' });

