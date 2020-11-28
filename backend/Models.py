import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import GaussianNB
from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import VotingClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
from sklearn.model_selection import cross_val_score


def plot(data):
    fig = plt.figure(figsize=(8, 8))
    ax = fig.add_subplot(1, 1, 1)
    ax.set_xlabel('Principal Component 1', fontsize=15)
    ax.set_ylabel('Principal Component 2', fontsize=15)
    ax.set_title('2 component PCA', fontsize=20)
    targets = [0, 1]
    colors = ['g', 'r']
    for target, color in zip(targets, colors):
        ax.scatter(
            data[data.columns[0]].loc[data[data.columns[-1]] == target],
            data[data.columns[1]].loc[data[data.columns[-1]] == target],
            c=color
        )
    ax.legend(targets)
    ax.axis([-50, 50, -50, 50])
    ax.grid()


def main_components(data, two_comp=False):
    x = data[data.columns[:-1]]
    x = StandardScaler().fit_transform(x)
    if two_comp:
        pca = PCA(n_components=2)
    else:
        pca = PCA(0.95)
    p_components = pca.fit_transform(x)
    p_data = pd.DataFrame(data=p_components)
    final_data = pd.concat([p_data, data[['Y']]], axis=1)
    if two_comp:
        plot(final_data)
    print(abs(pca.components_[0]))
    return final_data

def models(data):
    X = data[data.columns[:-1]]
    y = data['Y'].values
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.4,random_state=42)
    # models ensemble
    clf1 = LogisticRegression(random_state=1)
    clf2 = RandomForestClassifier(n_estimators=50, random_state=1)
    clf3 = GaussianNB()
    clf4 = KNeighborsClassifier(n_neighbors=7)
    clf5 = SVC(kernel='rbf', probability=True)

    eclf = VotingClassifier(estimators=[('lr', clf1), ('rf', clf2), ('gnb', clf3), ('knn', clf4), ('svc', clf5)],
                            voting='soft')
    probas = [c.fit(X_train, y_train).predict_proba(X_test) for c in (clf1, clf2, clf3, clf4, clf5,  eclf)]

    for clf, label in zip([clf1, clf2, clf3, clf4, clf5, eclf],
                          [
                              'Logistic Regression', 'Random Forest', 'Naive Bayes',
                              'KNeighborsClassifier', 'SVC', 'Ensemble'
                          ]):
        scores = cross_val_score(clf, X, y, scoring='accuracy', cv=5)
        scores_r = cross_val_score(clf, X, y, scoring='recall', cv=5)
        print("Accuracy: %0.2f (+/- %0.2f) [%s]" % (scores.mean(), scores.std(), label))
        print("Recall: %0.2f (+/- %0.2f) [%s]" % (scores_r.mean(), scores_r.std(), label))
    print()
    return probas[-1]


def main():
    path = "great.csv"
    great = pd.read_csv('great.csv', sep=',', index_col=[0])
    diseases = [
        'Артериальная гипертензия',
        'ОНМК',
        'Сердечная недостаточность',
        'Стенокардия, ИБС, инфаркт миокарда',
        'Прочие заболевания сердца']
    great['Y'] = great['Артериальная гипертензия']

    # for i in range(len(diseases)):
    #     great['Y'] = np.where((great["Артериальная гипертензия"] == 1), 1, great['Y'])

    arteria = great[:]
    onmk = great[:]
    heart_failure = great[:]
    infarkt = great[:]
    others = great[:]

    arteria['Y'] = arteria['Артериальная гипертензия']
    arteria = arteria.drop(columns=['Артериальная гипертензия', 'Длительность артериальной гипертензии'])
    onmk['Y'] = onmk['ОНМК']
    onmk = onmk.drop(columns=['ОНМК', 'Даность ОНМК'])
    heart_failure['Y'] = heart_failure['Сердечная недостаточность']
    heart_failure = heart_failure.drop(columns=['Сердечная недостаточность', 'Длительность сердечной недостаточности'])
    infarkt['Y'] = infarkt['Стенокардия, ИБС, инфаркт миокарда']
    infarkt = infarkt.drop(columns=['Стенокардия, ИБС, инфаркт миокарда', 'Длительность стенокардии, ИБС, инфаркта миокарда'])
    others['Y'] = others['Прочие заболевания сердца']
    others = others.drop(columns=['Прочие заболевания сердца', 'Длительность прочих заболеваний сердца'])

    # great = great.drop(columns=["Время засыпания", "Время пробуждения"])
    # mylist = great.columns[great.dtypes == "object"]
    # for i in range(len(mylist)):
    #     name = mylist[i]
    #     great[name] = great[name].str.replace(',', '.')
    #     # df.apply(lambda x: x.str.replace(',','.'))
    #     great[name] = great[name].astype(str).astype(float)
    datasets = [arteria, onmk, heart_failure, infarkt, others]

    great_comps = []
    for dataset in datasets:
        great_comp = main_components(dataset)
        great_comps.append(great_comp)

    probas = []
    i = 0
    for great_comp in great_comps:
        print(diseases[i])
        proba = models(great_comp)
        probas.append(proba)
        i += 1

    illness_id = 2
    person_id = 14
    print(f"Вероятность болезни '{diseases[illness_id]}' у {great['ID'][person_id]} равна {round(probas[illness_id][person_id][1], 2)}")  # model - row - probability of illness

    arteria_probas = probas[0]
    onmk_probas = probas[1]
    heart_failure_probas = probas[2]
    infarkt_probas = probas[3]
    others_probas = probas[4]

    arteria_probas = pd.DataFrame(arteria_probas)
    onmk_probas = pd.DataFrame(onmk_probas)
    heart_failure_probas = pd.DataFrame(heart_failure_probas)
    infarkt_probas = pd.DataFrame(infarkt_probas)
    others_probas = pd.DataFrame(others_probas)

    arteria_probas = pd.concat([arteria_probas, great[['ID']]], axis=1)
    onmk_probas = pd.concat([onmk_probas, great[['ID']]], axis=1)
    heart_failure_probas = pd.concat([heart_failure_probas, great[['ID']]], axis=1)
    infarkt_probas = pd.concat([infarkt_probas, great[['ID']]], axis=1)
    others_probas = pd.concat([others_probas, great[['ID']]], axis=1)


def _console():
    great = pd.read_csv("fulldata_6.csv", sep=';')
    great_new = great[:]
    great_new['Y'] = great_new['Артериальная гипертензия']
    great_new = great_new.drop(columns=['Артериальная гипертензия', 'Длительность артериальной гипертензии'])
    great_comp = main_components(great_new)
    probas = models(great_comp)


main()
