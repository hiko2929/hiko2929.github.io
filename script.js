    function izracunajFantasyScore() {
            const points = parseFloat(document.getElementById('points').value) || 0;
            const rebounds = parseFloat(document.getElementById('rebounds').value) || 0;
            const assists = parseFloat(document.getElementById('assists').value) || 0;
            const steals = parseFloat(document.getElementById('steals').value) || 0;
            const blocks = parseFloat(document.getElementById('blocks').value) || 0;
            const to = parseFloat(document.getElementById('to').value) || 0;
    

            let fantasyScore = (points * 1) + (rebounds * 1.2) + (assists * 1.5) + (steals * 3) + (blocks * 3) - (to * 1);
    
    
            document.getElementById('score').textContent = fantasyScore.toFixed(1);
        }