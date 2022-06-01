import { createApiClient } from "../common/api-client";

const apiClient = createApiClient(process.env.REACT_APP_BASE_URL ?? '');

class TodoService {
    getTodoList = async () => {
        const response = await apiClient.get('/todos');
        return response.data;
    }

    getTodo = async (id: number) => {
        const response = await apiClient.get(`/todos/${id}`);
        return response.data;
    }
}
const instance = new TodoService();
export default instance;