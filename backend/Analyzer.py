import pandas as pd

path = "База данных для конкурса.xls"
# data_dict = pd.read_excel(path, sheet_name=None)

# data1 = data_dict["Паспорт"]
data1 = pd.read_excel(path, sheet_name=0)
data1.ID = data1.ID.replace(regex={r'-': ''})
data1 = data1.astype({"ID": 'int64'})
data1 = data1.drop(columns='Дата рождения')
data1['Возраст'].loc[data1['Возраст'] == 2016] = 54    # Навскидку среднее
# data1.to_csv('data1.csv', sep=';', index=False)
# От 35 лет до 70 --- все ID уникальны --- 1 выброс по возрасту 5470100901

# data2 = data_dict["Совершен1"]
data2 = pd.read_excel(path, sheet_name=1)
data2.ID = data2.ID.replace(regex={r'-': ''})
data2 = data2.astype({"ID": 'int64'})
data2['Пол'] = data2['Пол'].replace(regex={r'М': 0})
data2['Пол'] = data2['Пол'].replace(regex={r'Ж': 1})
data2['Пол'].loc[pd.isna(data2['Пол'])] = 1
# 5470100901 - не указан пол - вероятно женский
data2 = data2.astype({"Пол": 'int32'})
data2 = data2.astype({"Семья": 'category'})
data2['family_codes'] = data2['Семья'].cat.codes
data2 = data2.astype({"Этнос": 'category'})
data2['ethnos_codes'] = data2['Этнос'].cat.codes
data2 = data2.astype({"Национальность": 'category'})
data2['nationality_codes'] = data2['Национальность'].cat.codes
data2 = data2.astype({"Религия": 'category'})
data2['religion_codes'] = data2['Религия'].cat.codes
data2 = data2.astype({"Образование": 'category'})
data2['education_codes'] = data2['Образование'].cat.codes
data2 = data2.astype({"Профессия": 'category'})
data2['profession_codes'] = data2['Профессия'].cat.codes
data2['Длительность сахарного диабета'].loc[pd.isna(data2['Длительность сахарного диабета'])] = 0
data2['Длительность артериальной гипертензии'].loc[pd.isna(data2['Длительность артериальной гипертензии'])] = 0
data2['Даность ОНМК'].loc[pd.isna(data2['Даность ОНМК'])] = 0
data2['Длительность стенокардии, ИБС, инфаркта миокарда'].loc[pd.isna(data2['Длительность стенокардии, ИБС, инфаркта миокарда'])] = 0
data2['Длительность сердечной недостаточности'].loc[pd.isna(data2['Длительность сердечной недостаточности'])] = 0
data2['Длительность прочих заболеваний сердца'].loc[pd.isna(data2['Длительность прочих заболеваний сердца'])] = 0
data2 = data2.rename(columns={"Гепетит": "Гепатит"})
data2['Длительность гепатита '].loc[pd.isna(data2['Длительность гепатита '])] = 0
data2 = data2.rename(columns={"Длительность гепатита ": "Длительность гепатита"})
data2['Онкология лок-я'] = data2['Онкология лок-я'].replace({' ': 'нет'})
data2 = data2.astype({"Онкология лок-я": 'category'})
data2['oncology_codes'] = data2['Онкология лок-я'].cat.codes
data2['Длительность онкологического процесса'].loc[pd.isna(data2['Длительность онкологического процесса'])] = 0
data2['Длительность хрон заболевания легких'].loc[pd.isna(data2['Длительность хрон заболевания легких'])] = 0
data2['Длительность бронхиальной астмы'].loc[pd.isna(data2['Длительность бронхиальной астмы'])] = 0
data2['Длительность туберкулеза легких'].loc[pd.isna(data2['Длительность туберкулеза легких'])] = 0
data2['Длительность ВИЧ/СПИД'].loc[pd.isna(data2['Длительность ВИЧ/СПИД'])] = 0
data2['Лекарство / прочие - уточнение'].loc[pd.isna(data2['Лекарство / прочие - уточнение'])] = 'нет'
data2 = data2.astype({"Лекарство / прочие - уточнение": 'category'})
data2['drug_codes'] = data2['Лекарство / прочие - уточнение'].cat.codes
data2 = data2.drop(columns='Перечень лекарства')
data2['Число перелом'].loc[pd.isna(data2['Число перелом'])] = 0
data2['Лет прошло'].loc[pd.isna(data2['Лет прошло'])] = 0
data2 = data2.astype({"Статус Курения": 'category'})
data2['smoking_codes'] = data2['Статус Курения'].cat.codes
data2['Возраст курения'].loc[pd.isna(data2['Возраст курения'])] = 0
data2['Сигарет в день'].loc[pd.isna(data2['Сигарет в день'])] = 0
data2['Сигарет лет'].loc[pd.isna(data2['Сигарет лет'])] = 0
data2['Сигарет прекр лет'].loc[pd.isna(data2['Сигарет прекр лет'])] = 0
data2['Сигарет прекр мес'].loc[pd.isna(data2['Сигарет прекр мес'])] = 0
data2['Частота пасс кур'].loc[pd.isna(data2['Частота пасс кур'])] = "нет"
data2 = data2.astype({"Частота пасс кур": 'category'})
data2['passive_smoking_codes'] = data2['Частота пасс кур'].cat.codes
data2 = data2.astype({"Алкоголь": 'category'})
data2['alcohol_codes'] = data2['Алкоголь'].cat.codes
data2['Возраст алког'].loc[pd.isna(data2['Возраст алког'])] = 0
data2['Водка, размер'].loc[pd.isna(data2['Водка, размер'])] = 0
data2['Водка, размер'].loc[pd.isna(data2['Водка, размер'])] = "нет"
data2['Водка, регуляр'].loc[pd.isna(data2['Водка, регуляр'])] = "нет"
data2 = data2.astype({"Водка, регуляр": 'category'})
data2['vodka_codes'] = data2['Водка, регуляр'].cat.codes
data2['Водка, порций'].loc[pd.isna(data2['Водка, порций'])] = 0
data2['Водка, лет'].loc[pd.isna(data2['Водка, лет'])] = 0
data2['Водка, отказ лет'].loc[pd.isna(data2['Водка, отказ лет'])] = 0
data2['Вино, регуляр'].loc[pd.isna(data2['Вино, регуляр'])] = "нет"
data2 = data2.astype({"Вино, регуляр": 'category'})
data2['wine_codes'] = data2['Вино, регуляр'].cat.codes
data2['Вино, порций'].loc[pd.isna(data2['Вино, порций'])] = 0
data2['Вино, лет'].loc[pd.isna(data2['Вино, лет'])] = 0
data2['Вино, отказ лет'].loc[pd.isna(data2['Вино, отказ лет'])] = 0
data2['Пиво, размер'].loc[pd.isna(data2['Пиво, размер'])] = 0
data2['Пиво, регуляр'].loc[pd.isna(data2['Пиво, регуляр'])] = "нет"
data2 = data2.astype({"Пиво, регуляр": 'category'})
data2['beer_codes'] = data2['Пиво, регуляр'].cat.codes
data2['Пиво, порций'].loc[pd.isna(data2['Пиво, порций'])] = 0
data2['Пиво, лет'].loc[pd.isna(data2['Пиво, лет'])] = 0
data2['Пиво, отказ лет'].loc[pd.isna(data2['Пиво, отказ лет'])] = 0
data2['Самогон, размер'].loc[pd.isna(data2['Самогон, размер'])] = 0
data2['Самогон, регуляр'].loc[pd.isna(data2['Самогон, регуляр'])] = "нет"
data2 = data2.astype({"Самогон, регуляр": 'category'})
data2['moonshine_codes'] = data2['Самогон, регуляр'].cat.codes
data2['Самогон, порций'].loc[pd.isna(data2['Самогон, порций'])] = 0
data2['Самогон, лет'].loc[pd.isna(data2['Самогон, лет'])] = 0
data2['Самогон, отказ лет'].loc[pd.isna(data2['Самогон, отказ лет'])] = 0
data2['Кр. вино, регуляр'].loc[pd.isna(data2['Кр. вино, регуляр'])] = "нет"
data2 = data2.astype({"Кр. вино, регуляр": 'category'})
data2['red_wine_codes'] = data2['Кр. вино, регуляр'].cat.codes
data2['Кр. вино, порций'].loc[pd.isna(data2['Кр. вино, порций'])] = 0
data2['Кр. вино, лет'].loc[pd.isna(data2['Кр. вино, лет'])] = 0
data2['Кр. вино, отказ лет'].loc[pd.isna(data2['Кр. вино, отказ лет'])] = 0
data2['5 порций дней в мес'].loc[pd.isna(data2['5 порций дней в мес'])] = 0
data2['5 порций число порций'].loc[pd.isna(data2['5 порций число порций'])] = 0
data2['Время засыпания'] = pd.to_datetime(data2['Время засыпания'], format='%H:%M:%S').dt.time
data2['Время пробуждения'] = pd.to_datetime(data2['Время пробуждения'], format='%H:%M:%S').dt.time
data2['Сончас, мин'].loc[pd.isna(data2['Сончас, мин'])] = 0
data2['Спорт, частота в мес'].loc[pd.isna(data2['Спорт, частота в мес'])] = 0
data2['Спорт, частота в год'].loc[pd.isna(data2['Спорт, частота в год'])] = 0
data2['Религия, частота в мес'].loc[pd.isna(data2['Религия, частота в мес'])] = 0
data2['Религия, частота в год'].loc[pd.isna(data2['Религия, частота в год'])] = 0
data2 = data2.drop(columns='Конкретно')
data2 = data2.drop(columns='Прочее, частота в год')
data2 = data2.drop(columns='Прочее, частота в мес')
# data2.to_csv('data2.csv', sep=';', index=False)

# data3 = data_dict["Совершен2"]
data3 = pd.read_excel(path, sheet_name=2)


def to_categorical(data, cols, nums):
    for i, col in enumerate(cols):
        data[data.columns[col]].loc[pd.isna(data[data.columns[col]])] = "нет"
        data = data.astype({data.columns[col]: 'category'})
        data[nums[i] + '_codes'] = data[data.columns[col]].cat.codes
    return data


def dropna(data, cols):
    for col in cols:
        data[data.columns[col]].loc[pd.isna(data[data.columns[col]])] = int(data[data.columns[col]].mean())
    return data


data3.ID = data3.ID.replace(regex={r'-': ''})
data3 = data3.astype({"ID": 'int64'})
data3 = to_categorical(data3,
                       [
                           1, 2, 3, 4,
                           5, 6, 7, 8,
                           9, 10, 11, 12,
                           13, 14, 15, 16,
                           23, 30, 36, 37,
                           38, 47, 48, 49,
                           50, 51, 52, 53,
                           54, 61, 62, 63,
                           65, 66, 67, 69,
                           70, 71, 73, 74,
                           75, 77, 79, 81
                        ],
                       [
                           "honest", "i_do", "butter", "flour",
                           "rice", "nonalcoholic", "snacks", "cigarettes",
                           "alcohol", "public_help", "pb_help_number", "relig_help",
                           "rg_help_number", "family_help", "other_help", "ot_help_number",
                           "conflict", "stress", "work_stress", "home_stress",
                           "money_stress", "buy_near", "walking", "trash",
                           "street_lights", "meet_other_people", "talking", "criminal",
                           "homeless_dogs", "diabetes_father", "diabetes_mother", "diabetes_brsis",
                           "IBS_father", "IBS_mother", "IBS_brsis", "AG_father",
                           "AG_mother", "AG_brsis", "insult_father", "insult_mother",
                           "insult_brsis", "cancer_father", "cancer_mother", "cancer_brsis"
                       ])
data3 = dropna(data3,
               [
                   60, 64, 68, 72, 76, 78, 80, 82, 83
               ])

data3 = data3.drop(columns=[
    data3.columns[55], data3.columns[56],
    data3.columns[57], data3.columns[58],
    data3.columns[59]
    ])
# data3.to_csv('data3.csv', sep=';', index=False)

# data4 = data_dict["Обслед"]
data4 = pd.read_excel(path, sheet_name=3)

data4.ID = data4.ID.replace(regex={r'-': ''})
data4 = data4.astype({"ID": 'int64'})


def is_na(data):
    nas = []
    for i in range(len(data.columns)):
        if len(data[pd.isna(data[data.columns[i]])]) > 0:
            nas.append(i)
    return nas


nas = is_na(data4)
nas.remove(78)
nas.remove(79)
nas.remove(76)
data4 = dropna(data4, nas)
nas = is_na(data4)
data4 = to_categorical(data4, nas, ["troubles", "anomaly_rhythm", "other_anomalies"])
# data4.to_csv('data4.csv', sep=';', index=False)

# data5 = data_dict["Семья"]
data5 = pd.read_excel(path, sheet_name=4)

data5.ID = data5.ID.replace(regex={r'-': ''})
data5 = data5.astype({"ID": 'int64'})
data5[data5.columns[1]].loc[pd.isna(data5[data5.columns[1]])] = int(data5[data5.columns[1]].mean())
# data5.to_csv('data5.csv', sep=';', index=False)

# data6 = data_dict["Дом хоз"]
data6 = pd.read_excel(path, sheet_name=5)
data6.ID = data6.ID.replace(regex={r'-': ''})
data6 = data6.astype({"ID": 'int64'})
str_nas = [1, 3, 4, 5, 6, 30, 31]
data6 = to_categorical(data6, str_nas, ["roof", "fuel_type", "heat_source", "water_source", "no_water", "cook_place", "window"])
nas = [33, 34, 35, 36, 37, 38]
nas = [26, 27, 29, 32]
data6 = dropna(data6, nas)
nas = [53, 54]
data6 = dropna(data6, nas)
str_nas = [48, 49, 50, 51, 52]
data6 = to_categorical(data6, str_nas, ["other_types", "food_part", "quest13", "wealth", "building"])
data6 = data6.drop(columns=[
    data6.columns[33], data6.columns[34], data6.columns[35],
    data6.columns[36], data6.columns[37], data6.columns[38]
])
# data6.to_csv('data6.csv', sep=';', index=False)

# data4_new = data4.drop(columns=data4.columns[data4.dtypes == "category"])


# def illness(data, illness_rus, illness_en):
#     data[f"{illness_en}_family"] = [
#         1 if data[f"{illness_rus}: отец"][x] == 'да' or
#              data[f"{illness_rus}: мать"][x] == 'да' or
#              data[f"{illness_rus}: братья / сестры"][x] == 'да'
#         else 0
#         for x in range(len(data))]
#     return data
