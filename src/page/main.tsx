import { useEffect, useState } from "react";
import { searchVClip } from "../libs/axios/axiosInstance";

interface videoData {
    title: string;
    url: string;
    datetime: Date;
    play_time: number;
    thumbnail: string;
    author: string;
}

const Main = () => {
    const [data, setData] = useState<videoData[]>([]);

    const fetchData = async () => {
        try {
            const response = await searchVClip("아이템");
            setData(response.documents);
            console.log(response.documents);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <div>{item.title}</div>
                    <p>{item.author}</p>
                    <img src={item.thumbnail} style={{ width: "500px" }} />
                    <p>{item.play_time}</p>
                    <p>{item.datetime.toString()}</p>
                </div>
            ))}
        </div>
    );
};
export default Main;
