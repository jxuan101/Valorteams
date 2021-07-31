import astra from '../assets/astra_icon.png';
import breach from '../assets/breach_icon.png';
import brimstone from '../assets/brimstone_icon.png';
import cypher from '../assets/cypher_icon.png';
import jett from '../assets/jett_icon.png';
import kayo from '../assets/kayo_icon.png';
import killjoy from '../assets/killjoy_icon.png';
import omen from '../assets/omen_icon.png';
import phoenix from '../assets/phoenix_icon.png';
import raze from '../assets/raze_icon.png';
import reyna from '../assets/reyna_icon.png';
import sage from '../assets/sage_icon.png';
import skye from '../assets/skye_icon.png';
import sova from '../assets/sova_icon.png';
import viper from '../assets/viper_icon.png';
import yoru from '../assets/yoru_icon.png';

export default function findImage(name) {
    switch(name) {
        case 'astra':
            return astra;
        case 'breach':
            return breach;
        case 'brimstone':
            return brimstone;
        case 'cypher':
            return cypher;
        case 'jett':
            return jett;
        case 'kayo':
            return kayo;
        case 'killjoy':
            return killjoy;
        case 'omen':
            return omen;
        case 'phoenix':
            return phoenix;
        case 'raze':
            return raze;
        case 'reyna':
            return reyna;
        case 'sage':
            return sage;
        case 'skye':
            return skye;
        case 'sova':
            return sova;
        case 'viper':
            return viper;
        case 'yoru':
            return yoru;
        default:
            return astra;
    }
}