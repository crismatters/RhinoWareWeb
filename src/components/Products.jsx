import React from 'react';

const Products = () => {
    return (
        <div className="container">
            <h2 className="center">Productos</h2>
            <section className="gallery">
                <div className="third columns half-fixed item" style={{ background: 'linear-gradient(0deg, rgb(8, 174, 234) 0%, rgb(42, 245, 152) 100%)' }}>
                    <div className="label">Puntos De Venta</div>
                </div>
                <div className="third columns half-fixed item" style={{ background: 'linear-gradient(0deg, rgb(8, 174, 234) 0%, rgb(42, 245, 152) 100%)' }}>
                  <div className="label">Sistemas De Administración</div>
                </div>
                <div className="third columns half-fixed item" style={{ background: 'linear-gradient(0deg, rgb(8, 174, 234) 0%, rgb(42, 245, 152) 100%)' }}>
                  <div className="label">Sistemas De Gestión A La Medida</div>
                </div>
                <div className="third columns half-fixed item" style={{ background: 'linear-gradient(0deg, rgb(8, 174, 234) 0%, rgb(42, 245, 152) 100%)' }}>
                  <div className="label">CRM</div>
                </div>
                <div className="third columns half-fixed item" style={{ background: 'linear-gradient(0deg, rgb(8, 174, 234) 0%, rgb(42, 245, 152) 100%)' }}>
                  <div className="label">Sitios Web</div>
                </div>
                <div className="third columns half-fixed item" style={{ background: 'linear-gradient(0deg, rgb(8, 174, 234) 0%, rgb(42, 245, 152) 100%)' }}>
                  <div className="label">WebApps</div>
                </div>

            </section>
            <div className="space"></div>
        </div>
    );
};

export default Products;
