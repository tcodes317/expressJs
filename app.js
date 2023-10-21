const express=require("express");
const app=express();
const fs=require("fs");
const movies=fs.readFileSync("database/database.json", "utf-8");

app.use((req, res, next)=>{
    console.log("Custom");

    next();
});

app.get("/api/vi/movies", (req, res)=>{
    res.status(200).json({
        status: "success",
        data: {
            movie: movies
        }
    })
})
app.get("/api/vi/movies/:id?", (req, res)=>{
    const id=req.params.id * 1;
    const findMovies=movies.find(el => el.id === id);

    fs.writeFileSync("database/database.json", JSON.stringify(movies), (err, data)=>{
        res.status(200).json({
            status: "success",
            data: {
                movie: findMovies
            }
        })
    })
})
app.delete("/api/vi/movies/:id?", (req, res)=>{
    const id=req.params.id * 1;
    const findMoviesToDelete=movies.find(el => el.id === id);
    const index=movies.indexOf(findMoviesToDelete);

    movies.splice(index, 1);

    fs.writeFileSync("database/database.json", JSON.stringify(movies), (err, data)=>{
        res.status(200).json({
            status: "success",
            data: {
                movies: null
            }
        })
    })
})
app.patch("/api/vi/movies/:id?", (req, res)=>{
    const id=req.params.id * 1;
    const findMoviesToUpdate=movies.find(el => el.id === id);
    const index=movies.indexOf(findMoviesToUpdate);
    Object.assign(findMoviesToUpdate, req.body);
    movies[index] = findMoviesToUpdate;

    fs.writeFileSync("database/database.json", JSON.stringify(movie), (err, data)=>{
        res.status(200).json({
            status: "success",
            data: {
                movies: findMoviesToUpdate
            }
        })
    })
    res.create("Created!")
});
app.post("/api/vi/movies", (req, res)=>{
    const newId=movies[movies.length - 1].id + 1;
    const newMovies=Object.assign({id: newId}, req.body);

    movie.push(newMovies);

    fs.writeFileSync("database/database.json", JSON.stringify(movies), (err, data)=>{
        res.status(200).json({
            status: "success",
            data: {
                movies: newMovies
            }
        })
    });

})
app.listen(3000, "127.0.0.1", ()=>{
    console.log("Connecting .....")
})