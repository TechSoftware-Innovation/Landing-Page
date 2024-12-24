export function onFormSend(){
    const apiKey = 'pattH8HVUyDdru9KJ.73944bd3abe6b04ea3bfd8fdd0375166988b7221f23b9d1d812e38dea6754319';  
    const baseId = 'appOK4oV20ciQVChc';  
    const tableName = 'Consultants'; 

    const submitBtn = document.getElementById('submit-btn');

    submitBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const form = document.getElementById('consultant-form');
        const formData = new FormData(form);
        const data = {};
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }

        const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;
        const headers = {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        };

        const body = JSON.stringify({
            fields: {
                Name: data.name,
                Email: data.email,
                Phone: data.phone,
                Message: data.message
            }
        });

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: body
            });

            if (response.ok) {
                alert('La consulta se ha enviado exitosamente.');
            } else {
                const errorData = await response.json();
                console.error('An error has ocurred while trying to append data to worksheet:', errorData);
                alert('Hubo un error al procesar el formulario.');
            }
        } catch (error) {
            console.error('An error has ocurred while trying to make the request:', error);
            alert('Hubo un error al enviar la solicitud.');
        }
    });

}