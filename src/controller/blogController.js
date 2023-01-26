
const { BlogService } = require('../service/index');

const blogService = new BlogService();

/*
 * 
POST --> ./city
 */
const create = async (req, res) => {
    try {
        
        const blog = await blogService.create(req.body);
        
        return res.status(201).json({
            data: blog,
            success : true,
            message : "Successfully created blog",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message : "Not able to create blog",
            success : false,
            error : error
        });
    }
}

/*
 * 
 DELETE --> ./city/:id
 */
const destroy = async (req, res) => {
    try {
        const response = await blogService.destroy(req.params.id);
        return res.status(200).json({
            data: response,
            success : true,
            message : "Successfully deleted City",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message : "Not able to delete city",
            success : false,
            error : error
        });
    }
}

/***
 * PATCH --> ./city/:id
 */
const update = async (req, res) => {
    try {
        const blog = await blogService.update(req.params.id, req.body);
        return res.status(201).json({
            data: blog,
            success : true,
            message : "Successfully updated City",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message : "Not able to update city",
            success : false,
            error : error
        });
    }
}

/**
 * GET --> ./city/:id
 */
const get = async (req, res) => {
    try {
        const response = await blogService.get(req.params.id);
        return res.status(200).json({
            data: response,
            success : true,
            message : "Successfully fetched blog",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message : "Not able to get blog",
            success : false,
            error : error
        });
    }
}

const getAll = async (req,res) => {
    try {
        const blogs = await blogService.getAll(req.query)
        return res.status(200).json({
            data: blogs,
            success : true,
            message : "Successfully fetched blogs",
            error: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message : "Not able to fetch the blogs",
            success : false,
            error : error
        });
    }
}

module.exports = {
    create, destroy,update,get,getAll
}