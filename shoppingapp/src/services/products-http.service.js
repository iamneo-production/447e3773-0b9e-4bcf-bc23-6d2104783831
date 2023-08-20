import http from "../http-common";

export const setLoggedUser = (user) => {
    return http.post('/loggedUser',user);
}

export const getLoggedUser = () => {
    return http.get('/loggedUser');
}

export const getProductList = () => {
    return http.get("/products");
}

export const getProductDetails = (id) => {
    return http.get(`/products/${id}`);
}

export const createProduct = (data) => {
    return http.post("/products", data);
};


export const removeProduct = (id) => {
    return http.delete(`/products/${id}`);
};

export const setNewUser = (data)=>{
    return http.post("/users",data);
}

export const getNewUser= (data) => {
    return http.get('/users?email=' + data.email + '&password=' + data.password);
}