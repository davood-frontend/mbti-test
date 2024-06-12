import ENFJ from '@/app/assets/types/ENFJ.jfif'
import ENFP from '@/app/assets/types/ENFP.jfif'
import ENTJ from '@/app/assets/types/ENTJ.jfif'
import ENTP from '@/app/assets/types/ENTP.jfif'
import ESFJ from '@/app/assets/types/ESFJ.jfif'
import ESFP from '@/app/assets/types/ESFP.jfif'
import ESTJ from '@/app/assets/types/ESTJ.jfif'
import ESTP from '@/app/assets/types/ESTP.jfif'
import INFJ from '@/app/assets/types/INFJ.jfif'
import INFP from '@/app/assets/types/INFP.jfif'
import INTJ from '@/app/assets/types/INTJ.jfif'
import INTP from '@/app/assets/types/INTP.jfif'
import ISFJ from '@/app/assets/types/ISFJ.jfif'
import ISFP from '@/app/assets/types/ISFP.jfif'
import ISTJ from '@/app/assets/types/ISTJ.jfif'
import ISTP from '@/app/assets/types/ISTP.jfif'
import { ENFJdata, ENFPdata, ENTJdata, ENTPdata, ESFJdata, ESFPdata, ESTJdata, ESTPdata, INFJdata, INFPdata, INTJdata, INTPdata, ISFJdata, ISFPdata, ISTJdata, ISTPdata } from './typesInfo'

const localData = [
    { label: 'INFJ', img: INFJ, info: INFJdata, color: '#2bab1f' },
    { label: 'ENTJ', img: ENTJ, info: ENTJdata, color: '#94479e' },
    { label: 'INTJ', img: INTJ, info: INTJdata, color: '#94479e' },
    { label: 'ENFJ', img: ENFJ, info: ENFJdata, color: '#2bab1f' },
    { label: 'ENTP', img: ENTP, info: ENTPdata, color: '#94479e' },
    { label: 'INTP', img: INTP, info: INTPdata, color: '#94479e' },
    { label: 'ESTP', img: ESTP, info: ESTPdata, color: '#d9bb16' },
    { label: 'INFP', img: INFP, info: INFPdata, color: '#2bab1f' },
    { label: 'ISTP', img: ISTP, info: ISTPdata, color: '#d9bb16' },
    { label: 'ENFP', img: ENFP, info: ENFPdata, color: '#2bab1f' },
    { label: 'ESFP', img: ESFP, info: ESFPdata, color: '#d9bb16' },
    { label: 'ESTJ', img: ESTJ, info: ESTJdata, color: '#5497b8' },
    { label: 'ISFP', img: ISFP, info: ISFPdata, color: '#d9bb16' },
    { label: 'ISTJ', img: ISTJ, info: ISTJdata, color: '#5497b8' },
    { label: 'ESFJ', img: ESFJ, info: ESFJdata, color: '#5497b8' },
    { label: 'ISFJ', img: ISFJ, info: ISFJdata, color: '#5497b8' },
];
export const typeSymbole = (mbtiType: string) => {
    const foundItem = localData.find((item) => item.label === mbtiType);
    return foundItem;
}