import {Marker, Popup} from 'mapbox-gl';

export class Marker extends Marker {
    constructor(element, options) {
        super(element, options);
    }


    /**
     * Add some keyboard events before adding to the map
     *
     * @param map
     *
     * @return null
     */
    addTo(map) {
        const ele = super.getElement();
        var popup = super.getPopup();
        ele.addEventListener('keyup', (e) => {
            if (e.code === 'Space') {
                if (popup !== null) {
                    super.togglePopup();

                }
            }
        });

        //Finishing touch
        super.addTo(map);
    }
}

export class Popup extends Popup {
    constructor(options) {
        super(options);
    }

    addTo(map) {
        super.addTo(map);

        if (super.isOpen()) {
            const ele = document.querySelector('.mapboxgl-popup');
            ele.tabIndex = 0;
            ele.focus();
            document.addEventListener('keyup', (e) => {
                if (e.target === ele) {
                    if (e.code === 'Escape') {
                        ele.parentNode.removeChild(ele);
                    }
                }
            });
        }

    }
}