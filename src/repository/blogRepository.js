const {Blog} = require('../models/index');

class BlogRepository{
    async create({ title, content }){
        try {
            const blog = await Blog.create({ title, content });
            return blog;
        }
        catch(error) {
            console.log("Something went wrong in repository");
            throw { error };
        }
    }

    async delete({ id }){
        try {
            await Blog.destroy({where: {id: id}})
        }
        catch(error) {
            console.log("Something went wrong in repository");
            throw { error };
        }
    }

    async update( blogId, data ){
        try{
           const blog =  await Blog.update( data, {
                where: {
                    id: blogId 
                }
            })
            return blog;
        }
        catch( error ){
            console.log("Something went wrong in repository");
            throw{ error }
        }
    }

    async get( blogId ){
        try{
            const blog = await Blog.findByPk( blogId );
            return blog;
        }
        catch( error ){
            console.log("Something went wrong in repository");
            throw{ error }
        }

    }

    async getAll(){
        try{
            const blog = await Blog.findAll();
            return blog;
        } catch (error) {
            console.log("Something went wrong in repository");
            throw{ error }
        }
    
    }
}

module.exports = BlogRepository;