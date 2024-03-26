import { useEffect, useState } from 'react';
import './Categories.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderCard from './OrderCard/OrderCard';

const Categories = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [allCategory, setAllCategory] = useState([]);


    useEffect(() => {
        fetch('./cat.json')
            .then((res) => res.json())
            .then((data) => setAllCategory(data))
    }, [])
    //console.log(allCategory)
    const pizzas = allCategory.filter(item => item.category === 'pizzas');
    const burgers = allCategory.filter(item => item.category === 'burgers');
    const salads = allCategory.filter(item => item.category === 'salads')
    const combos = allCategory.filter(item => item.category === 'combos');
    return (
        <section className='cat-section'>
            <div className="text-center">
                <h1>Our Popular <span>Categories</span></h1>
            </div>
            <div className='cat-section'>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Pizzas</Tab>
                    <Tab>Burgers</Tab>
                    <Tab>Salads</Tab>
                    <Tab>Combos</Tab>
                </TabList>
                <TabPanel>
                    <div className='order-card'>
                        {pizzas.map(item =><OrderCard
                        key={item._id}
                        item={item}>
                            </OrderCard>)
}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='order-card'>
                        {salads.map(item =><OrderCard
                        key={item._id}
                        item={item}>
                            </OrderCard>)
}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='order-card'>
                        {burgers.map(item =><OrderCard
                        key={item._id}
                        item={item}>
                            </OrderCard>)
}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='order-card'>
                        {combos.map(item =><OrderCard
                        key={item._id}
                        item={item}>
                            </OrderCard>)
}
                    </div>
                </TabPanel>
            </Tabs>
            </div>
        </section>
    );
};

export default Categories;