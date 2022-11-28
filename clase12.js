const autosImportados = require("./auto")

const concesionaria = {
    autos: autosImportados,
    buscarAuto: function (patNum) {
        let busca = this.autos.find((element) => element.patente == patNum);
        if (busca == null) {
            return null
        } else {
            return busca;
        }
    },
    venderAuto: function (patNum) {
        const auto = this.buscarAuto(patNum);
        if (auto) {
            return auto.vendido = true
            return auto
        } else {
            return null
        }
    },
    autosParaLaVenta: function () {
        return this.autos.filter((venta) => venta.vendido == false)
    },
    autosNuevos: function () {
        return this.autosParaLaVenta().filter((kms) => kms.km < 100);

    },
    listaDeVentas: function () {
        return this.autos.filter((venta) => venta.vendido === true).map((element) => element.precio);
    },
    totalDeVentas: function () {
        return this.listaDeVentas().reduce((acum, suma) => acum + suma, 0);
    },
    puedeComprar: function (auto, persona) {
        if ((auto.precio / auto.cuotas < persona.capacidadDePagoEnCuotas) && (auto.precio < persona.capacidadDePagoTotal)) {
            return true
        } else {
            return false
        }
    },
    autosQuePuedeComprar: function (persona) {
        return this.autosParaLaVenta().filter(auto => { return this.puedeComprar(auto, persona) });

    }

}
