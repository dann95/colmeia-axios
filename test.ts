import { ColmeiaAxiosWrapper } from "./dist";

//https://www.mocky.io/
const instance: ColmeiaAxiosWrapper = new ColmeiaAxiosWrapper({
    baseURL: 'http://www.mocky.io/v2/5e711506300000585b7a342b'
});

(async () => {
    try {
        const res2 = await instance.post<any>('?xpto=1', {
            a: 1,
            b: 2,
            c: 3
        });

        console.log(res2.data)

    } catch (e) {
        console.log(e);
    }

})();
