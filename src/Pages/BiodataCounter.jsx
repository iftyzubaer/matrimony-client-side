import CountUp from 'react-countup';
import { Col, Row, Statistic } from 'antd';
import { useEffect, useState } from 'react';
const formatter = (value) => <CountUp end={value} separator="," />;

const BiodataCounter = () => {

    const [data, setData] = useState([])
    const [groom, setGroom] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/biodatas')
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
    }, [])

    console.log(data);

    const gender = "male";

    useEffect(() => {
        const findMale = data.find(biodata => biodata.gender == gender)
        setGroom(findMale)
    }, [gender, data])


    return (
        <div className='text-2xl my-16'>
            <h3 className="text-5xl py-6 font-bold text-center">Success Counter</h3>
            <Row gutter={16}>
                <Col span={6}>
                    <Statistic title="Total Candidates" value={data.length} formatter={formatter} />
                </Col>
                <Col span={6}>
                    <Statistic title="Groom Candidates" value={6} precision={2} formatter={formatter} />
                </Col>
                <Col span={6}>
                    <Statistic title="Bride Candidate" value={4} precision={3} formatter={formatter} />
                </Col>
                <Col span={6}>
                    <Statistic title="Marriage Completed" value={2} precision={4} formatter={formatter} />
                </Col>
            </Row>
        </div>
    );
};

export default BiodataCounter;