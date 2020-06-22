export const link : string = 'https://jsonplaceholder.typicode.com/users';

const robotsApiCall = async (link ?: string) : Promise<JSON> => {
    try {
        const response = await fetch(link!);
        return await response.json();   
    } catch (error) {
        throw new Error('Api failed');
    }
}

export default robotsApiCall;