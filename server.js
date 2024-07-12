const express = require('express');
const app = express();
const path = require('path');

const technologies = [
    { technology: "Javascript", level: 1, image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { technology: "Python", level: 1, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/701px-Python-logo-notext.svg.png" },
    { technology: "Visual Studio Code", level: 1, image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
    { technology: "HTML5", level: 2, image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { technology: "CSS3", level: 2, image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
    { technology: "Ruby", level: 2, image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" },
    { technology: "MySQL", level: 2, image: "https://www.svgrepo.com/show/354099/mysql.svg" },
    { technology: "Node", level: 2, image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { technology: "Angular", level: 2, image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" },
    { technology: "React", level: 2, image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { technology: "Vue", level: 2, image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
    { technology: "Svelte", level: 2, image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" },
    { technology: "Solid", level: 2, image: "https://www.solidjs.com/img/logo/without-wordmark/logo.svg" },
    { technology: "Jest", level: 2, image: "https://www.cdnlogo.com/logos/j/58/jest.svg" },
    { technology: "Laravel", level: 2, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/738px-Laravel.svg.png" },
    { technology: "Postgres", level: 2, image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
    { technology: "Nginx", level: 2, image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg" },
    { technology: "Apache", level: 2, image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Apache_Feather_Logo.svg" },
    { technology: "Vim", level: 2, image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Vimlogo.svg" },
    { technology: "Emacs", level: 2, image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Emacs-logo.svg" },
    { technology: "Java", level: 3, image: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" },
    { technology: "Kotlin", level: 3, image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" },
    { technology: "Swift", level: 3, image: "https://www.svgrepo.com/show/452110/swift.svg" },
    { technology: "Dart", level: 3, image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png" },
    { technology: "TypeScript", level: 3, image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
    { technology: "Go", level: 3, image: "https://www.svgrepo.com/show/373635/go-gopher.svg" },
    { technology: "Flutter", level: 3, image: "https://cdn.prod.website-files.com/5ee12d8d7f840543bde883de/5ef3a1148ac97166a06253c1_flutter-logo-white-inset.svg" },
    { technology: "Haskell", level: 4, image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg" },
    { technology: "Perl", level: 4, image: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/perl-programming-language-icon.png" },
    { technology: "Rust", level: 5, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1024px-Rust_programming_language_black_logo.svg.png" }
];

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/techs', (req, res) => {
    const techs = technologies.map(tech => {
        const { technology, ...rest } = tech;
        return rest;
    });
    res.json(techs);
});

app.get('/tech-name/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (index >= 0 && index < technologies.length) {
        res.json({ name: technologies[index].technology });
    } else {
        res.status(404).json({ error: 'Invalid index' });
    }
});
