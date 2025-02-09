window.onload = () => {
  const countdownElement = document.getElementById('time-in-love');
  const startDate = new Date('2024-02-14T00:00:00Z'); 

  function updateCountdown() {
      const now = new Date();
      const difference = now - startDate; 

      const minutes = difference / 60000;
      const seconds = (difference / 1000) % 60;

      countdownElement.textContent = parseInt(minutes) + ',' + parseInt(seconds);
  }

  setInterval(updateCountdown, 1000); 
  updateCountdown();
};
// var ctx = document.getElementById('myChart').getContext('2d');

// var myChart = new Chart(ctx, {
//   type: 'pie',
//   data: {
//     labels: ['words', 'physical touch', 'quality time', 'acts of service'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5],
//       backgroundColor: [
//         '#E84A9C',
//         '#FCBDE2',
//         '#E8AEFF',
//         '#FF74BB'
//       ],
//       borderWidth: 0
//     }]
//   }
// });
document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('loveLanguagesChart').getContext('2d');
  const loveLanguagesChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: ['Words of Affirmation', 'Quality Time', 'Acts of Service', 'Physical Touch'],
          datasets: [{
              label: 'Love Language Scores',
              data: [40, 25, 20, 40], 
              backgroundColor: [
        '#E84A9C',
        '#FCBDE2',
        '#E8AEFF',
        '#FF74BB' 
              ],
              borderWidth: 0
          }]
      },
      options: {
          plugins: {
              legend: {
                  display: false
              }
          }
      }
  });
});
