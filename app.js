async function getData(){
      const x = [];
      const y = [];
      const response = await fetch('Interest_Rates.csv');
      const data = await response.text();

      const table = data.split('\n');
      table.forEach(row => {
        const cols = row.split(',');
        const yearMonth = cols[0];
        x.push(yearMonth);
        const rate = cols[1];
        y.push(rate);
        console.log(yearMonth, rate);
      });
      return{x, y};
    }