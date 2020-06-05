import React from 'react';

import Cards from '../Cards/Cards'; 
import Barchart from '../Chart/Barchart'; 
import CountryPicker from '../CountryPicker/CountryPicker'; 
import { fetchData } from '../../api/';
import styles from '../Home/Home.module.css';

import image from '../../images/image.png';

class BarchartDispaly extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Barchart data={data} country={country} /> 
      </div>
    );
  }
}

export default BarchartDispaly;