import CountUp from 'react-countup';
import { Col, Row, Statistic } from 'antd';
const formatter = (value) => <CountUp end={value} separator="," />;

const BiodataCounter = () => {
    return (
        <div className='text-2xl my-16'>
            <h3 className="text-5xl py-6 font-bold text-center">Success Counter</h3>
            <Row gutter={16}>
                <Col span={6}>
                    <Statistic title="Total Candidates" value={10} formatter={formatter} />
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