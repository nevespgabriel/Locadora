import Movie from "../models/movie_model.js";

const store = async (req, res) => {
    try{
        const content = await Movie.create(req.body);
        res.status(201).json(content);
    } catch(error){
        res.status(400).send(error);
    }
}

const index = async (req, res) => {
    try{
        const content = await Movie.find({
            rentedBy: undefined //busca apenas os filmes que não estão alugados
        }).exec();
        res.json(content);
    } catch(error){
        res.status(400).send(error);
    }
}

export default {
    store,
    index
}