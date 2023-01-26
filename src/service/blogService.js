const { BlogRepository } = require('../repository/index');

class BlogService{
    constructor(){
        this.blogrepository = new BlogRepository();
    }

    async create(data) {
        try {
            const blog = await this.blogrepository.create(data);
            return blog;
        } catch (error) {
           console.log("Something went wrong in Service layer");
           throw{ error }; 
        }
    }

    async delete(cityId) {
        try {
            const response = await this.blogrepository.delete(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw{ error };
        }
    }

    async update(blogid, data) {
        try {
            const blog = await this.blogrepository.update(blogid,data);
            return blog;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw{ error };
        }
    }

    async get(blogId) {
        try {
            const blog = await this.blogrepository.get(blogId);
            return blog;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw{ error };
        }
    }

    async getAll(){
        try {
            
            const blogs = await this.blogrepository.getAll();
            return blogs;
        } catch (error) {
            console.log("Something went wring in crud repository");
            throw{ error }
        }
    }
}

module.exports = BlogService;