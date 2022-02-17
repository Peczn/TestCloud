function renderTable () {
    window.onload=function(){

        const json = {"mesi":[{"documenti":23,"importo":42538},{"documenti":24,"importo":34227},{"documenti":17,"importo":29695},{"documenti":4,"importo":46422},{"documenti":10,"importo":43430},{"documenti":39,"importo":36388},{"documenti":49,"importo":17962},{"documenti":5,"importo":3056},{"documenti":35,"importo":1313},{"documenti":16,"importo":41824},{"documenti":10,"importo":16913},{"documenti":27,"importo":49360}]}
        const mesi = json.mesi
        const numeroMesi = document.getElementsByClassName('month__content')
        const overlay = document.getElementsByClassName('month__overlay')

        for (let i = 0; i < numeroMesi.length; i++) {
            let content = numeroMesi[i]
            const v = mesi[i]
            const doc = document.createElement("div")
            doc.innerHTML = v.documenti + " doc."
            content.appendChild(doc)
            doc.style.color = "#6F7E86"
            const importo = document.createElement("p")
            importo.style.margin = "4px 0"
            importo.style.color = "#00875A"
            importo.style.fontWeight = "500"
            importo.innerHTML = v.importo
            content.appendChild(importo) 
            const largest = Math.max(v.importo)
            
            for (let p = 0; p < overlay.length; p++) {
                const overlayPer = overlay[p]
                const percentage = (mesi[p].importo * 100) / largest
                overlayPer.style.transition = "all 1.6s ease-out"
                setTimeout(function(){
                    overlayPer.style.height = percentage + "%"
                },300)         
            }
        }

        $( ".months" ).selectable({
            selecting: function( event, ui ) {
                $('#message').html("Rilascia il mouse per selezionare")
            }, 
            selected: function( event, ui ) {
                $('#message').html("")  
            }
        });
    }
}
renderTable();