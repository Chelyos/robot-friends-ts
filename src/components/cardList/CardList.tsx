import React, { Fragment} from 'react';
import Card from '../card/Card';
import { useSelector} from 'react-redux';
import { IRobot } from '../../interfaces/Interfaces';

export default function CardList() {
    const robots = useSelector((state : any) => state.robotRed.robots);
    const searchField = useSelector((state : any) => state.searchRed.search);
    const filteredRobots : Array<IRobot> = robots.filter((robot : IRobot) => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
        <Fragment>
            {
                filteredRobots?.map((_ : any, index : number) => {
                    return(
                        <Card 
                        key={index} 
                        id={filteredRobots[index].id} 
                        name={filteredRobots[index].name} 
                        email={filteredRobots[index].email}
                        username={filteredRobots[index].username}
                        phone={filteredRobots[index].phone}
                        website={filteredRobots[index].website}
                        />
                    );
                })
            }
        </Fragment>
    )
}
